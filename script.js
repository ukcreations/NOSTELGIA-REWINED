// Famous content by year
const nostalgiaData = {
    getBollywoodData: (year, category) => {
        const data = {
            movies: {
                1970: [
                    { title: "Sachaa Jhutha", stars: "Rajesh Khanna, Mumtaz", details: "One of the highest-grossing films of 1970, featuring Rajesh Khanna in a double role" }
                ],
                1975: [
                    { title: "Sholay", stars: "Amitabh Bachchan, Dharmendra", details: "The most iconic Indian film ever made, known for its legendary dialogues and characters" }
                ],
                1980: [
                    { title: "Qurbani", stars: "Feroz Khan, Zeenat Aman", details: "Blockbuster known for its hit song 'Aap Jaisa Koi' and stylish direction" }
                ],
                1990: [
                    { title: "Aashiqui", stars: "Rahul Roy, Anu Aggarwal", details: "Musical blockbuster that redefined romance and music in Indian cinema" }
                ],
                1995: [
                    { title: "Dilwale Dulhania Le Jayenge", stars: "Shah Rukh Khan, Kajol", details: "Longest-running film in Indian cinema, redefined modern romance" }
                ],
                2000: [
                    { title: "Kaho Naa... Pyaar Hai", stars: "Hrithik Roshan", details: "Biggest hit of 2000, launched Hrithik Roshan to superstardom" }
                ],
                2009: [
                    { title: "3 Idiots", stars: "Aamir Khan, R. Madhavan", details: "Revolutionary film about education system, highest-grossing film of its time" }
                ]
            },
            songs: {
                1970: [
                    { title: "Mere Sapno Ki Rani", movie: "Aradhana", singer: "Kishore Kumar", details: "Iconic train sequence song, still remembered for its unique picturization" }
                ],
                1975: [
                    { title: "Mehbooba Mehbooba", movie: "Sholay", singer: "R.D. Burman", details: "R.D. Burman's most famous composition, featuring Helen" }
                ],
                1980: [
                    { title: "Om Shanti Om", movie: "Karz", singer: "Kishore Kumar", details: "Defined disco era in Bollywood, legendary reincarnation theme" }
                ],
                1990: [
                    { title: "Pehla Nasha", movie: "Jo Jeeta Wohi Sikandar", singer: "Udit Narayan", details: "First love anthem of the 90s, revolutionary song picturization" }
                ],
                1995: [
                    { title: "Tujhe Dekha To", movie: "DDLJ", singer: "Kumar Sanu", details: "Most romantic song of the decade, shot in Punjab's mustard fields" }
                ],
                2000: [
                    { title: "Kal Ho Naa Ho", movie: "Kal Ho Naa Ho", singer: "Sonu Nigam", details: "Heart-touching melody that defined love and loss" }
                ],
                2009: [
                    { title: "All Izz Well", movie: "3 Idiots", singer: "Sonu Nigam, Shaan", details: "Motivational anthem that resonated with students across India" }
                ]
            }
        };
        const yearData = data[category][year] || data[category][Object.keys(data[category]).reduce((prev, curr) => 
            Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
        )];
        return yearData || [];
    },

    getSportsData: (year) => {
        const data = {
            1971: ["India defeats England in England for the first time in Test cricket"],
            1975: ["India wins its first Cricket World Cup match against East Africa"],
            1983: ["India's historic Cricket World Cup victory under Kapil Dev's leadership"],
            1985: ["India wins World Championship of Cricket in Australia"],
            1987: ["India hosts its first Cricket World Cup with Pakistan"],
            1994: ["Sushmita Sen becomes first Indian Miss Universe"],
            2000: ["Vishwanathan Anand becomes first Indian Chess Grandmaster"],
            2007: ["India wins first T20 World Cup under Dhoni's captaincy"],
            2011: ["India wins Cricket World Cup after 28 years"]
        };
        const nearestYear = Object.keys(data).reduce((prev, curr) => 
            Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
        );
        return data[nearestYear] || [];
    },

    getCultureData: (year) => {
        const data = {
            1970: ["Color TV experiments begin in India", "Rise of bell-bottom fashion"],
            1975: ["Emergency period changes social dynamics", "Rise of Angry Young Man in cinema"],
            1980: ["Television revolution with Asian Games broadcast", "VCR culture begins"],
            1985: ["Doordarshan's golden era with shows like Ramayan"],
            1990: ["Economic liberalization changes lifestyle", "Cable TV revolution begins"],
            1995: ["Miss Universe & Miss World both from India", "Satellite TV boom"],
            2000: ["Mobile phones become common", "Rise of Indian IT industry"],
            2005: ["Social media starts influencing youth", "Reality TV shows boom"],
            2010: ["Smartphone revolution begins", "3G services launch in India"]
        };
        const nearestYear = Object.keys(data).reduce((prev, curr) => 
            Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
        );
        return data[nearestYear] || [];
    },

    getTrendsData: (year) => {
        const data = {
            1970: ["Murphy Radio was a status symbol", "Bajaj Scooter - family vehicle"],
            1975: ["Ambassador & Premier Padmini cars rule roads", "Indian Coffee House culture"],
            1980: ["Double-cassette decks become popular", "Video game parlors emerge"],
            1985: ["Walkman revolution begins", "Televisions become common in homes"],
            1990: ["Video games (Nintendo, Samurai) peak", "Audio cassettes golden era"],
            1995: ["Cable TV changes entertainment", "STD/PCO booths everywhere"],
            2000: ["Internet cafes in every locality", "Mobile phones start spreading"],
            2005: ["iPod changes music listening", "Digital cameras become common"],
            2010: ["Smartphones become essential", "Social media dominates youth life"]
        };
        const nearestYear = Object.keys(data).reduce((prev, curr) => 
            Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
        );
        return data[nearestYear] || [];
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const yearInput = document.getElementById('birthYear');
    const submitButton = document.getElementById('submitYear');
    const randomButton = document.getElementById('randomYear');
    const resultsDiv = document.getElementById('results');

    const isValidYear = (year) => {
        return year >= 1970 && year <= 2010;
    };

    const getRandomYear = () => {
        return Math.floor(Math.random() * (2010 - 1970 + 1)) + 1970;
    };

    const createMediaCard = (item, type) => {
        const card = document.createElement('div');
        card.className = 'media-card fade-in';
        
        let content = '';
        if (type === 'movie') {
            content = `
                <h3>${item.title}</h3>
                <p><strong>Stars:</strong> ${item.stars}</p>
                <p>${item.details}</p>
            `;
        } else if (type === 'song') {
            content = `
                <h3>${item.title}</h3>
                <p><strong>Movie:</strong> ${item.movie}</p>
                <p><strong>Singer:</strong> ${item.singer}</p>
                <p>${item.details}</p>
            `;
        } else {
            content = `<p>${item}</p>`;
        }
        
        card.innerHTML = content;
        return card;
    };

    const updateSectionContent = (sectionId, data, type = 'default') => {
        const container = document.getElementById(sectionId);
        container.innerHTML = '';
        data.forEach(item => {
            container.appendChild(createMediaCard(item, type));
        });
    };

    const displayYearData = (year) => {
        if (!isValidYear(year)) {
            alert('Please enter a year between 1970 and 2010');
            return;
        }

        resultsDiv.classList.remove('hidden');
        resultsDiv.classList.add('vibrate');

        // Add vibration to section headers
        document.querySelectorAll('.section h2').forEach(header => {
            header.classList.add('vibrate');
            setTimeout(() => header.classList.remove('vibrate'), 500);
        });

        // Remove vibration class after animation completes
        setTimeout(() => {
            resultsDiv.classList.remove('vibrate');
        }, 500);

        updateSectionContent('bollywoodContent', nostalgiaData.getBollywoodData(year, 'movies'), 'movie');
        updateSectionContent('sportsContent', nostalgiaData.getSportsData(year));
        updateSectionContent('cultureContent', nostalgiaData.getCultureData(year));
        updateSectionContent('trendsContent', nostalgiaData.getTrendsData(year));

        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    };

    document.querySelectorAll('.media-tabs').forEach(tabGroup => {
        tabGroup.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-btn')) {
                const category = e.target.dataset.tab;
                const section = e.target.closest('.section');
                const year = parseInt(yearInput.value);

                tabGroup.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                if (section.classList.contains('bollywood')) {
                    updateSectionContent('bollywoodContent', nostalgiaData.getBollywoodData(year, category), category === 'movies' ? 'movie' : 'song');
                }
            }
        });
    });

    submitButton.addEventListener('click', () => {
        const year = parseInt(yearInput.value);
        displayYearData(year);
    });

    randomButton.addEventListener('click', () => {
        const randomYear = getRandomYear();
        yearInput.value = randomYear;
        displayYearData(randomYear);
    });

    // Add vibration effect to tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.add('vibrate');
            setTimeout(() => btn.classList.remove('vibrate'), 500);
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const yearParam = urlParams.get('year');
    if (yearParam && isValidYear(parseInt(yearParam))) {
        yearInput.value = yearParam;
        displayYearData(parseInt(yearParam));
    }
});
