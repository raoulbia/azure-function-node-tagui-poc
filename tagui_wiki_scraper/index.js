const { exec } = require('child_process') ;
const shell = require('shelljs') ;
const azure = require('azure-storage');

shell.exec('cp -avr ./scripts/ /home/data/');
shell.exec('cp -avr ./node_modules/ /home/data/');

//  PHP
shell.exec('apt-get install php -y') ;

//  Python
shell.exec('apt-get install python3') ;
shell.exec('ln -s /usr/bin/python3.9 /bin/python') ;

// Chrome
shell.exec('wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb');
shell.exec('sudo dpkg -i google-chrome-stable_current_amd64.deb');

module.exports = async function (context, myTimer) {  
       
    // execute TagUi script
    var tg = shell.exec('/home/data/node_modules/tagui/src/tagui /home/data/scripts/wiki.js -h');
    // see the TagUI logs
    context.log(tg);
    
    // upload SCV file
    var blobSvc = azure.createBlobService();
    blobSvc.createBlockBlobFromLocalFile('mycontainer', 'wiki_table.csv', '/home/data/wiki_table.csv', function(error, result, response){
        if(!error){
          context.log('File successfully uploaded to Blob Storage');
          // clean up
          shell.exec('rm -r /home/data/wiki_table.csv');
        }
      });
};