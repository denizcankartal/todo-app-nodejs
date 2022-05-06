git init
git add file_name
git add .
git status
git commit -m "commit message"

## setting up ssh keys to push the local repo to the remote repo at a remote server

ssh-keygen -t rsa -b 4096 -C "yourmailaddr@hotmail.com" # generating ssh key
-> id_rsa @ ~/.ssh is the private key, DO NOT SHARE IT WITH ANYONE
-> id_rsa.pub , public key that we can share with third party solutions such as github, heroku etc.

eval "$(ssh-agent -s)" # on linux or macos
eval $(ssh-agent -s) # returns something like "Agent pid 1822"

ssh-add ~/.ssh/id_rsa # linux
ssh-add.exe /c/Users/Deniz/.ssh/id_rsa # windows

on github go to "ssh and gpg keys" section -> generate a new ssh key using the id_rsa.pub content ->copy-paste the id_rsa.pub content to the key section!

ssh -T git@github.com # test the ssh connection to the github server

# setting up the local-remote channel

git remote add origin https://github.com/denizcankartal/todo-app-nodejs.git

# push local files to the remote repo at the git server

git push -u origin main # main is the default branch, this was before master, -u set the upstream as origin
