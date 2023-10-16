# Calimove to Google Calendar

## What is it ?
These scripts allow their user to scrape lesson days from Calimove's course curriculum and generate a CSV of events that can be imported into a Google Calendar.

## Which courses can be parsed ?
I've tested the scripts for "Complete Calisthenics" and "Mobility 2.0".

## Steps
- Paste the content of `scrape_course_curriculum.js` into the browser's console when visiting the target course's curriculum page. You will get prompted whether the lessons are timed or not. Any answer other than "Yes" means "No". For example, lessons are timed in the "Mobility 2.0" course.
- Run `generate_calendar_csv.py`. There are several possible arguments for this script, run it with the `-h` flag to learn about them and what they do.
- Import the generated CSV into a Google Calendar.

## Additional details
- Events are all day, private. Edit the script to change this behavior.