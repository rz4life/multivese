const familyTree = {
    name: 'Rz family',
    siblings: ['Malik','sulit', 'Ibrahim','Idera'],
    parents: {
        father: "Lateef Alagbada ",
        mother: " Mujidat Alagbada " 
    },
    cousins: ["taofeek", "Sikiru","Abiola"],
    Grandparent: ['Saliu', 'Adejoke'],

    childOf: function( relative ) {
       if (relative == "Grandparent"){
           return  this.Grandparent
       }else if (relative == "parents"){
           return this.parents
       }else if ( relative == 'siblings'){
           return this.siblings
       }else if( relative== 'cousins'){
           return this.cousins
       }
    }
};

console.log( familyTree.childOf('parents'))

module.exports = familyTree