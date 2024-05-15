document.addEventListener('DOMContentLoaded', function(){
    const nevInput = document.getElementById('nev');
    const reszlegInput = document.getElementById('reszleg');  
    const berInput = document.getElementById('ber');
    const nemeInput = document.getElementById('neme');
    const belepesevInput = document.getElementById('belepesev');
    const hozzaadGomb = document.getElementById('hozzaad');
    const megjelenitGomb = document.getElementById('megjelenit');
    const dolgozokTabla = document.getElementById('dolgozokTabla')
    const apiUrl="http://localhost/api2/index.php?dolgozok";   

megjelenitGomb.addEventListener('click',dolgozokTablaFrissit)
    function dolgozoSor(dolgozo){
        let tr = `
        <td scope="col">${dolgozo.nev}</td>
        <td scope="col">${dolgozo.reszleg}</td>
        <td scope="col">${dolgozo.neme}</td>
        <td scope="col">${dolgozo.belepesev}</td>
        <td scope="col">${dolgozo.ber}</td>
        </tr>`;
        return tr;

    }

    async function dolgozokTablaFrissit(){
        let response = await fetch(apiUrl);
        let dolgozok = await response.json();
        dolgozokTabla.innerHTML = `<table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Név</th>
                <th scope="col">Részleg</th>
                <th scope="col">Neme</th>
                <th scope="col">Belépés év</th>
                <th scope="col">Bér</th>
            </tr>
        </thead>
        <tbody>`;
        dolgozok.forEach(dolgozo => {
            dolgozokTabla.innerHTML += dolgozoSor(dolgozo);
            dolgozokTabla.innerHTML += `</tbody> </table>`;
            
        });

    }
});