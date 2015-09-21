
# How to install node on Ubuntu?
curl -sL https://deb.nodesource.com/setup_0.10 | sudo -E bash -
sudo apt-get install -y nodejs

# How to Install pub-server?
sudo npm install -g pub-server

# How to update to latest pub-server?  
sudo npm update -g pub-server

# How to run server?
cd presentations
pub

# How to view generated html? 
http://localhost:3001

# How to print to PDF?
View the presentation in index mode and print to PDF in chrome browser.
(Other browsers don't work as well) 

# How to debug something? (never needed)
bash
DEBUG=pub:* pub

