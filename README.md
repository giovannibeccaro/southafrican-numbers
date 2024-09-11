Takehome assignment from interview.

The project is pretty self-explainatory, the user is able to check the provided csv file in html, divided in three lists, one with correct numbers, one with incorrect numbers, and the last one with originally incorrect numbers which have been modified as best as I could figure out from the explaination of the problem. At first I didn't understand what I was supposed to modify in the "correctable" entries, than I figured out that perhaps what the problem asked was to delete the parts where "extra" characters were combined with the numbers, thus making them wrong? I hope so at least ahahah!

I also wrote a broader function which not only finds the error with the "\_DELETE\_" syntax provided in the csv, but only every other possible entry that was not a digit that could've messed up the number, you can check entering a number in the input bar. To get a correct number in the list, it should be 11 digits long, well, at least that's what I figured out reading the problem, hope I didn't mess it up!

Design is not something I really focused in this test, as I think it was leaning more towards the backend than the frontend, which seems strange, but I guess it's just a versatile test which can be assigned both to frontenders and to backenders, which makes sense.

I tested the code with Cypress. I did some E2E tests as well as some unit test on the fixNumber function and phoneValidation function. You can find the tests in cypress/e2e/spec.cy.ts.

I'll stop right here, as I have commented the code with my line of thought and it should be quite clear, have a nice day!

Link to the live website: https://southafrican-numbers.netlify.app
