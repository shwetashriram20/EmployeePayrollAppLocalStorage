
window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});
const createInnerHtml = () =>{
    const innetHtml =`
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>department</th>
        <th>salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td>
            <img class="profile" alt="" src="Ellipse -2.png">
        </td>
        <td>Shweta Shriram</td>
        <td>Female</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Engineer</div>
        </td>
        <td>3000000</td>
        <td>18 Feb 2023</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
            <img id="1" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innetHtml;
}