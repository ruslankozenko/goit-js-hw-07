'use strict';

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

    input.addEventListener('input', () => {
        
    const inputValue = input.value.trim();
      
    output.textContent = inputValue.length > 0 ? inputValue : 'Anonymous';
});