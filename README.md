# note-taking

A feature-rich Notes Taking App built using React, Firebase for data storage, and user authentication. React Toastify is integrated for notification alerts.

## Description

The Firebase Notes App is a full-fledged React-based application that enables users to create, edit, view, and delete notes. It goes beyond basic CRUD operations by incorporating Firebase for real-time data storage and user authentication for secure data access. React Toastify is also integrated to provide user-friendly notification alerts.

## Technologies Used

- React.js
- Firebase (Firestore for data storage and Firebase Authentication)
- React Bootstrap
- React Toastify

## Features

- Create new notes with titles and descriptions.
- Edit existing notes.
- Delete notes securely.
- User authentication for data privacy.
- Real-time data synchronization with Firebase.
- User-friendly interface.
- Toast notifications for user feedback.
- Random background colors for each note.


## Installation

1. Clone the repository: [git clone](https://github.com/vaibhav209/note-taking.git) 
2. Navigate to the project folder: cd note-taking
3. Install dependencies: npm install
4. Configure Firebase:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase config object.
   - Create a `.env` file in the project root and add your Firebase config:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```
5. Start the development server: `npm start`
6. Open your browser and visit [localhost](http://localhost:3000) to see the app running.


## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
