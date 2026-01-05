function reconstructTrip(tickets) {
    const map = {} // new Map()

    for (let i = 0; i < tickets.length; i++) {
        const ticket = tickets[i]
        map[ticket.from] = ticket.to
    }

    // start обновляем 
    let start = Object.keys(map).find((from) => !Object.values(map).includes(from))
    // Если не нашли что from уникальные и на него больше ничего не ссылается 

    const route = []

    for (let i = 0; i < tickets.length; i++) {
        if (!start) break

        route.push({ from: start, to: map[start] })
        start = map[start]
    }


}

console.log(reconstructTrip([
    { from: 'Спб', to: 'Минск' },
    { from: 'Киев', to: 'Новосибирск' },
    { from: 'Череповец', to: 'Москва' },
    { from: 'Минск', to: 'Киев' },
    { from: 'Москва', to: 'Спб' },
]))

// console.log(reconstructTrip([
//     { from: 'Череповец', to: 'Москва' },
//     { from: 'Москва', to: 'Спб' },
//     { from: 'Спб', to: 'Минск' },
//     { from: 'Минск', to: 'Киев' },
//     { from: 'Киев', to: 'Новосибирск' },
// ]))