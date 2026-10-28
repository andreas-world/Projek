
const form = document.getElementById('text');
const button = document.getElementById('add-task-btn');



button.addEventListener('click', function(){   
        if (form.value == '') {
        return;
    }
    const div = document.createElement('div');
    const teksToDo = document.createElement('p');
    div.classList.add('listCard');

    const delbut = document.createElement('button')
    delbut.classList.add('delete')
    delbut.textContent = 'hapus'
    

    teksToDo.textContent = form.value;
    div.append(delbut, teksToDo);

    const list = document.getElementsByClassName('list')[0];
    list.append(div)

    //delete section
    delbut.addEventListener('click', function(){
        div.remove();
    })
    form.value = ''
})