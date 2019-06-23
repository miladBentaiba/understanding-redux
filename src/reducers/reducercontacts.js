
let initialstate=[
    {
        id: '1',
        name:'Asma',
        phone: '55518695',
        email: 'asma@hotmail.fr'
    }
]


const reducerContacts=(state=initialstate, action)=>{
    switch(action.type){
        case 'ADD_CONTACT' : return state.concat(action.newcontact)
        case 'REMOVE_CONTACT' : return state.filter((el)=>el.id!==action._id)
        case 'EDIT_CONTACT' : return state.map((el)=>el.id===action.editcontact.id ? action.editcontact : el)
        default : return state
    }
}
export default reducerContacts