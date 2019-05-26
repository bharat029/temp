# A Simple Dynamic Portfolio Website

This is a SPA (Single Page Website).

Technologies Used:
* Boostrap 4
* React 
* Redux
* Firebase

## Components And Structure

This website has the following components: 

* Sidebar
* About Me
* Projects
* Project's Popup
* CV
* Admin (Complex)
    1. About Me List View
    2. About Me Form (For Update and Insert)
    3. Projects List View
    4. Projects Form (For Update and Insert)
    5. CV Section (Complex)
        1. Education List View 
        2. Education Form (For Update and Insert)
        3. Certificate List View
        4. Certificate Form (For Update and Insert)
        5. Software List View
        6. Software Form (For Update and Insert)
        7. Interest List View
        8. Interest Form (For Update and Insert)
    6. Personal Details Form (For Update Only)

## Structure Of The Firestore

1. About Me: 

    | Field | Description       |
    | ----- | ----------------- |
    | id    | Unique ID         |
    | abtme | single paragrapoh |

2. Project: 

    | Field  | Description                     |
    | ------ | ------------------------------- |
    | id     | Unique ID                       | 
    | title  | Project Title                   |
    | desc-1 | First Paragraph of Description  |
    | desc-2 | Second Paragraph of Description |
    | desc-3 | Third Paragraph of Description  |
    | high-1 | First Highlight Point           |
    | high-2 | Second Highlight Point          |
    | high-3 | Third Highlight Point           |
    | high-4 | Fourth Highlight Point          |
    | high-5 | Fifth Highlight Point           |
    | repo   | Repository Link                 |

3. Education:

    | Field  | Description                             |
    | ------ | --------------------------------------- |
    | id     | Unique ID                               | 
    | title  | Education Title                         |
    | img    | Background Image for the Project Button |
    | desc-1 | First Point of Description              |
    | desc-2 | Second Point of Description             |
    | desc-3 | Third Point of Description              |
    | desc-4 | Fourth Point of Description             |
    | desc-5 | Fifth Point of Description              |

4. Certificate:

    | Field  | Description                     |
    | ------ | ------------------------------- |
    | id     | Unique ID                       | 
    | title  | Certificate Title               |
    | desc   | Description                     |

1. About Me: 

    | Field | Description      |
    | ----- | ---------------- |
    | id    | Unique ID        |
    | abtme | single Point     |

6. Interest:

    | Field  | Description                     |
    | ------ | ------------------------------- |
    | id     | Unique ID                       | 
    | title  | Interest Title                  |
    | desc   | Description                     |

## Constraints And Ordering (For Admin)

* In the Personal Details may only be updated and not added or deleted. But it's okay to leave some of the fields empty.
* In the Projects Section:
    - The Title can not be updated so if you wish to change the title you need to delete the existing project and insert a new one in.
    - The Background image can be unique for each project. But unless a new image is uploaded the a generic background is used by default.
    - Each project should have at least one paragraph of description and and one highlight point.
    - Demo video code and repository link are also required fields.
* In the Education Section the title and at least one point of description is required.
* For all of the rest of them all the form fiedls are required.

As for the ordering except for the About Me Section in all of the rest the entry thats updated or inserted latest shows up first.

## Structure Of The Firebase Storage

* File: ``` files/Resume.pdf ``` Only for the Resume
* Images: ``` imgs/ ``` For the Project Background and the sidebar image