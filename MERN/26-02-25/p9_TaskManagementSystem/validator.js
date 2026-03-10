function validateTitle(title) {
    //Check if string or not and not null
    if(typeof title!='string' || !title){
        return "Title Required and should be a string"
    }else if(title.length>3){
        return true
    }else 
        return false
}
function validatePriority(priority){
    priority=priority.toLowerCase()
    if(priority==='low' || priority==='medium' || priority==='high'){
        return true
    }return false
}

function validateDueDate(date){
    if(Date.parse(date)){
        return true
    }return false
}

export {validateTitle, validatePriority, validateDueDate}