const vegpont = 'https://api.restful-api.dev/objects';

async function fetchData() {
  try {
    const response = await fetch(vegpont);
    const data = await response.json();

    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '<h2>Adatok:</h2>';
    
    const table = document.createElement('table');
    const headerRow = table.createTHead().insertRow(0);
    headerRow.insertCell(0).textContent = 'ID';
    headerRow.insertCell(1).textContent = 'Név';

    data.forEach(item => {
      const row = table.insertRow();
      row.insertCell(0).textContent = item.id;
      row.insertCell(1).textContent = item.name;
    });

    dataContainer.appendChild(table);
  } catch (error) {
    console.error('Hiba a lekérdezés során:', error.message);
  }
}


const vegpont2 = 'https://api.restful-api.dev/objects';

document.getElementById("submitForm").addEventListener("click", async function postData() {
  const name = document.getElementById('name').value;
  const color = document.getElementById('color').value;
  const capacity = document.getElementById('capacity').value;
  const id = document.getElementById("id").value;

  try {
    const response = await fetch(vegpont2, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, data: { color, capacity } }),
    });

    if (response.ok) {
      console.log('Sikeres POST kérés:', response.status);
     
    } else {
      console.error('Hiba az adat létrehozása során:', response.status);
    }
  } catch (error) {
    console.error('Hiba az adat létrehozása során:', error.message);
  }
});


const vegpontModosit = 'https://api.restful-api.dev/objects/7';

document.getElementById("modifyFormButton").addEventListener("click", async function putData(){
  const modifiedName = document.getElementById('modifyName').value;
  const modifiedColor = document.getElementById('modifyColor').value;
  const modifiedCapacity = document.getElementById('modifyCapacity').value;
  const modifiedId = document.getElementById("modifyId").value;

  try {
    const response = await fetch(vegpontModosit, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: modifiedId, name: modifiedName, data: { color: modifiedColor, capacity: modifiedCapacity } }),
    });

    if (response.ok) {
      console.log('Sikeres PUT kérés:', response.status);
    } else {
      console.error('Hiba az adat módosítása során:', response.status);
    }
  } catch (error) {
    console.error('Hiba az adat módosítása során:', error.message);
  }
});

window.onload = fetchData;