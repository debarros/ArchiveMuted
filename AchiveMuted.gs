/**
 * archives all muted email threads every minute
 */
function archiveMuted() {
  
  var cutoffdate = new Date();
  cutoffdate.setDate(cutoffdate.getDate() - 5);
  
  // Get all muted message threads
  var mutethreads = GmailApp.search("is:mute after:" + Utilities.formatDate(cutoffdate, "EST", "yyyy-MM-dd"));
  // Logger.log(mutethreads.length);
  
  
  // Check whether threads are in inbox
  for (i = 0; i < mutethreads.length; i++){
    if(mutethreads[i].isInInbox()){
      mutethreads[i].moveToArchive();
      // Logger.log(mutethreads[i].getFirstMessageSubject());
    }
  }
}

function checkDate() {
  var cutoffdate = new Date();
  Logger.log(cutoffdate);
  
  cutoffdate.setDate(cutoffdate.getDate() - 5);
  Logger.log(cutoffdate);
  
  thismonth = cutoffdate.getMonth() + 1;
  thisdate = cutoffdate.getFullYear() + "/" + thismonth  + "/" + cutoffdate.getDate();
  Logger.log(thisdate);
  
}
