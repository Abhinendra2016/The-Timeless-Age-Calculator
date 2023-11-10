document.addEventListener('DOMContentLoaded', function () {
    const birthDateInput = document.getElementById('birthDate');
    const liveTimeResult = document.getElementById('liveTime');
    const ageResult = document.getElementById('age');

    birthDateInput.addEventListener('input', updateResults);

    function updateResults() {
        const birthDate = new Date(birthDateInput.value);
        const currentDate = new Date();

        const ageMilliseconds = currentDate - birthDate;
        const ageInSeconds = ageMilliseconds / 1000;
        const ageInMinutes = ageInSeconds / 60;
        const ageInHours = ageInMinutes / 60;

        const years = currentDate.getFullYear() - birthDate.getFullYear();
        const months = currentDate.getMonth() - birthDate.getMonth();
        const days = currentDate.getDate() - birthDate.getDate();

        liveTimeResult.textContent = `Overall live time: ${Math.floor(ageInHours)} hours, ${Math.floor(ageInMinutes % 60)} minutes, ${Math.floor(ageInSeconds % 60)} seconds`;
        ageResult.textContent = `Your age: ${years} years, ${months} months, ${days} days`;
    }
});
