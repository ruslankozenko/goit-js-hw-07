const input = document.getElementById('#name-input');
const output = document.getElementById('#name-output');

    nameInput.addEventListener('input', () => {
        
    const inputValue = nameInput.value.trim();
      
    nameOutput.textContent = inputValue.length > 0 ? inputValue : 'Anonymous';
});