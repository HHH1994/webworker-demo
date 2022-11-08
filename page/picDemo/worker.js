self.onmessage = function(e) {
    console.log('start:', new Date().toLocaleTimeString())
    let count = 1;
    self.postMessage(new Date().toLocaleTimeString());    
    for(let i = 0; i < 100000000; i++) {
        count++
    }
    self.postMessage(new Date().toLocaleTimeString());    
}