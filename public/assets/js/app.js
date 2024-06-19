
// Verificar que el DOM esté cargado
$(document).ready(() => {

    // capturar los ids
    const formulario = $('#formulario')
    const rut = $('#rut')
    const nombre = $('#nombre')
    const curso = $('#curso')
    const nivel = $('#nivel')

    // detectar el evento submit del formulario
    formulario.on('submit', async (event) => {
        event.preventDefault()
        console.log('procesando formulario...')

        // validar los datos de entrada...

        // enviar datos al backend POST: /students
        // petición http fetch, $.ajax(), axios

        axios.post('/students', {
            rut: rut.val(),
            nombre: nombre.val(),
            curso: curso.val(),
            nivel: nivel.val()
        })
            .then(({ data }) => console.log(data))
            .catch(e => console.log(e))

        // try {
        //     const { data } = await axios.post('/students', {
        //         rut: rut.val(),
        //         nombre: nombre.val(),
        //         curso: curso.val(),
        //         nivel: nivel.val()
        //     })
        //     console.log(data)
        // } catch (error) {
        //     console.log(error)
        // }
    })

})