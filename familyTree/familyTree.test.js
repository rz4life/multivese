const familyTree = require ('./familyTree')

describe ('Family Tree test', () =>{

    test( 'name is rz', () =>{
        expect (familyTree.name).toBe('Rz family')
    })

    test( 'check to contain siblings ', () =>{
        expect (familyTree.siblings).toContain('Malik')
    })

   test('check to return', () =>{
       expect (familyTree.childOf('siblings')).toContain('Malik')
   })

   test('check to return ', () =>{
    expect (familyTree.childOf('parents')).toBe(familyTree.parents)
   })

   test('check type of', () =>{
    expect (typeof familyTree.childOf('parents')).toBe('object')
})
})