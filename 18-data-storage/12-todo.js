window.onload = () => {
    let itemsDOM = document.getElementById('items');
      let submitBtn = document.getElementById('submit');

      submitBtn.onclick = (e) => {
            let item = document.getElementById('item');
                fetch('http://192.168.152.144:8080/todo',{method: 'POST',body:'item='+item.value})
                  .then(res=>{
                            res.text().then(txt => 
                                        console.log(txt)
                                                );
                                  
                  });
                    
      };
        fetch('http://192.168.152.144:8080/todo')
          .then(res=>{
            res.text().then(txt => {
                      let items = JSON.parse(txt).data;
                              itemsDOM.innerHTML = items.map(item => '<li>' + item + '</li>').join('\n');
                                    
            });
                
          });

};
