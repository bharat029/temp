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
        i. Education List View 
        ii. Education Form (For Update and Insert)
        iii. Certificate List View
        iv. Certificate Form (For Update and Insert)
        v. Software List View
        vi. Software Form (For Update and Insert)
        vii. Interest List View
        viii. Interest Form (For Update and Insert)
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

    | Field  | Description                     |
    | ------ | ------------------------------- |
    | id     | Unique ID                       | 
    | title  | Education Title                 |
    | desc-1 | First Point of Description      |
    | desc-2 | Second Point of Description     |
    | desc-3 | Third Point of Description      |
    | desc-4 | Fourth Point of Description     |
    | desc-5 | Fifth Point of Description      |

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
    | title  | Interest Title               |
    | desc   | Description                     |

