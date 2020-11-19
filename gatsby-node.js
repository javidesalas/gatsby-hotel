exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacion {
                nodes {
                    slug
                }
            }
        }
    `)

    //console.log(resultado)

    if (resultado.errors) {
        reporter.panic('no hubo resultados', resultado.error)
    }

    //Si hay páginas, crear los archivos

    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes

    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug
            }
        })
    })
}