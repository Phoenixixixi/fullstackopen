sequenceDiagram
actor user
participant browser
participant server

    user->>browser: type hello world into form
    user->>browser: Click Save

    browser->>server: POST/save_new-_ote
    server-->browser: 201 updated

    browser-->user: new note updated
