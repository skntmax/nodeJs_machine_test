var current_text_area, sbmt_btn;
var clicked_on_edit = (clicked_id) => {
    current_id = clicked_id;
    current_text_area = clicked_id;
    document.getElementById(`btn_submit${clicked_id}`).classList.replace('fas', 'far');
    document.getElementById(`txt_area${clicked_id}`).removeAttribute('disabled');
}

let save_button = (save_id) => {
    document.getElementById(`txt_area${current_text_area}`).disabled = true;
    document.getElementById(`${save_id}`).classList.replace('far', 'fas');
}

window.onload = () => {
    // let edit_val = false;
    let cb = document.querySelector('#create');

    cb.addEventListener('click', function() {
        let new_div = document.createElement('div');
        new_div.classList.add('main_todolist');
        // new_div.setAttribute('id', 'tododiv');
        let txt_edit_id = Math.random();
        var div_data = ` 

        <input type="text" placeholder="Your title"/> 
        <div id="tododiv" class="tododiv ">
             
                <div class="">
                    <i icons class="fas fa-edit " title="edit" onclick="clicked_on_edit(this.id)" id="${txt_edit_id}"></i>
                </div>
                <div>
                    <i class="fas fa-trash dlt_button" title="Delete Note"></i>

                </div>
                <div>
                    <i class="far fa-check-circle" id="btn_submit${txt_edit_id}" onclick="save_button(this.id)" title="save"></i>
                </div>
               
                <textarea type="hidden" class="hidden textarea " disabled id="txt_area${txt_edit_id}"> </textarea>

            </div>

            
            `;
        const final_div = new_div.insertAdjacentHTML('afterbegin', div_data);

        const ref = document.getElementById('note_list');
        ref.insertAdjacentElement('afterbegin', new_div);

        let edit_button = document.getElementById('edit_button');
        let textarea = document.getElementsByClassName('textarea');




        let dlt_button = document.querySelector('.dlt_button');
        dlt_button.addEventListener('click', () => {
            new_div.remove();
        });

    });

    // console.log(htmlDivCollection);




    //  remove div

}

{
    // Developed by sknt max 







}




//   My dummy code during my development 



// let htmlDivCollection = [
//     {...edit_button },
//     {...textarea }
// ];



// let select_div = (ref) => {
//     var index = findIndex(function(ref) {
//         return ref.notes_collection.edit_button;
//     });

// }

// console.log(clicked)
// if (edit_val == false) {
//     edit_button.addEventListener('click', function() {
//         edit_val = true;
//         console.log(edit_val);
//         document.querySelector('textarea').removeAttribute('disabled');
//         document.querySelector('#btn_submit').classList.replace('fas', 'far');

//     });
// }

// console.log(this.current_id);
// const btn_submit = document.getElementById('btn_submit');
// btn_submit.addEventListener('click', () => {
//     document.querySelector('textarea').setAttribute('disabled', "");
//     document.querySelector('#btn_submit').classList.replace('far', 'fas');
//     // document.querySelector('#btn_submit').classList.add('fa-1x');
// });

//   My dummy code during my development