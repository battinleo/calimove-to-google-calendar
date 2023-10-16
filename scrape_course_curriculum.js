const isTimed = prompt('Are the training sessions timed?', 'Yes') == 'Yes';
const lectures = Array.from(
    document.querySelectorAll('.lecture-name')
);
const lectureStrings = lectures.map(lecture => lecture.innerText);
const lectureStringsFiltered = filterLectures(lectureStrings);
const mappedLectures = lectureStringsFiltered.map(parseLectureString);
const mappedLecturesJSON = JSON.stringify(mappedLectures, null, 4);

saveStringAsFile(mappedLecturesJSON, 'retrieved_data.json');

function filterLectures(lectureStrings) {
    return lectureStrings.filter(isLectureString);
}

function parseLectureString(string) {
    const parsedLecture = {
        week: getWeekFromLectureString(string),
        day: getDayFromLectureString(string),
    }
    if (isTimed) {
        parsedLecture = {
            ...parsedLecture,
            duration: getDurationFromLectureString(string),
        }
    }
    return parsedLecture;
}

function saveStringAsFile(string, fileName) {
    const blob = createTextBlob(string);
    const dummyLink = createDummyDownloadLink(blob, fileName);
    dummyLink.click();
}

function isLectureString(string) {
    return string.includes('Day');
}

function getWeekFromLectureString(string) {
    return parseInt(/W(\d*)/.exec(string)[1]);
}

function getDayFromLectureString(string) {
    return parseInt(/Day (\d*)/.exec(string)[1]);
}

function getDurationFromLectureString(string) {
    return /\d*:\d*/.exec(string)[0];
}

function createTextBlob(string) {
    return new Blob(
        [ string ],
        { type: 'text/plain' }
    );
}

function createDummyDownloadLink(contentBlob, fileName) {
    const dummyLink = document.createElement("a");
    dummyLink.href = window.URL.createObjectURL(contentBlob);
    dummyLink.download = fileName;

    return dummyLink;
}
