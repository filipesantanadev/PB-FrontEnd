export const locations = [
    L.circle([-22.977, -43.395], 
        {
            color: 'rgb(121, 212, 200)',
            fillColor: 'rgb(121, 212, 200)',
            fillOpacity: 0.5,
            radius: 600
        }
    ),
    L.circle([-22.970845, -43.372146], 
        {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 150
        }
    ),
    L.circle([-22.995087, -43.411160], 
        {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 150
        }
    ),
    L.circle([-22.990284, -43.415033], 
        {
            color: 'yellow',
            fillColor: 'yellow',
            fillOpacity: 0.5,
            radius: 150
        }
    )
]

export function addToMap(map){
    locations.forEach(loc => {
        loc.addTo(map)
    });
}