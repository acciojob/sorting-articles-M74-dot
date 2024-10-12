//your JS code here. If required.
const bandss = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

function stripArticle(bandName) {
    // Words to ignore
    const ignoreWords = ['The', 'A', 'An'];
    
    // Split the band name into words
    const words = bandName.split(' ');
    
    // Check if the first word is one of the ignore words
    if (ignoreWords.includes(words[0])) {
        // Remove the first word and join the rest
        return words.slice(1).join(' ');
    } else {
        // Return the original name if it doesn't start with an ignore word
        return bandName;
    }
}

bands.sort((a, b) => {
    // Get the band names without the starting articles
    const bandA = stripArticle(a);
    const bandB = stripArticle(b);
    
    // Compare the stripped names
    if (bandA < bandB) {
        return -1;
    } else if (bandA > bandB) {
        return 1;
    } else {
        return 0;
    }
});


const bandList = document.getElementById('bands');

// Populate the <ul> with sorted bands
bandss.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});