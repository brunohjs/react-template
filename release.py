import sys
import subprocess
import json

def get_version():
    versions = subprocess.check_output(["git", "tag"]).decode('ascii').strip().split('\n')
    version = versions[-1] if versions and versions[0] else 'v0.0.0'
    version = version.replace('v', '').split('.')

    if len(sys.argv) > 1:
        if sys.argv[1] == "major":
            version[0] = str(int(version[0]) + 1)
            version[1] = "0"
            version[2] = "0"
        elif sys.argv[1] == "minor":
            version[1] = str(int(version[1]) + 1)
            version[2] = "0"
        elif sys.argv[1] == "path":
            version[2] = str(int(version[2]) + 1)
    else:
        version[2] = str(int(version[2]) + 1)
    version = ".".join(version)
    return version

def release(version):
    branch_name = subprocess.check_output(["git", "branch", "--show-current"]).decode('ascii')
    if branch_name != "master":
        subprocess.run(["git", "checkout", "master"], shell=True)
    subprocess.run(["git", "pull"], shell=True)

    json_file = json.load(open("package.json"))
    json_file["version"] = version
    json.dump(json_file, open("package.json", "w"), indent=2)

    subprocess.run(["git", "add", "package.json"], shell=True)
    subprocess.run(["git", "commit", "-m", f"Nova versão lançada {version}"], shell=True)
    subprocess.run(["git", "push"], shell=True)

    subprocess.run(["git", "tag", f"{version}"], shell=True)

if __name__ == "__main__":
    version = get_version()
    release(version)