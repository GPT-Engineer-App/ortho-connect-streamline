# ortho-connect-streamline

Orthostream a platform to streamline and automate the booking and operational processes in an orthopedic department of a major trauma hospital involves creating a system that addresses various crucial steps. The platform should integrate scheduling, communication, and documentation functionalities to enhance coordination among the surgical teams, theatre staff, and ward personnel, thereby improving patient experience and operational efficiency.
Use of modern  ui/ux design and also an about us. 
PlatformOverview.jsx` to describe the platform design overview and core modules. Updated `App.jsx` to include routing for this new page and added a navigation component `Navigation.jsx` to switch between pages.

homepage with a new headline, subheading, and hero image. Enhanced the feature descriptions and added a call to action section for a free trial and demo request.

5 core modules of orthoconnect /sugery connect 


Core Modules

Surgeon Scheduling Module
Manage individual surgeon schedules, including allocated surgical weeks and specific times.
Prioritize trauma cases while allowing for pre-emptive booking of non-trauma cases based on surgeon specialty.
Theater List and Stack Module
A dynamic display of scheduled surgeries, including short summaries, X-ray images, and theater allocations.
Integrates with existing theater list software for seamless management of CEPOD lists and theater preparation.
Communication and Alerts System
Real-time messaging and notification system for all stakeholders, including surgeons, theater managers, and ward staff.
Automated alerts for any changes in the schedule or emergency additions to ensure all relevant parties are informed promptly.
Patient Management and Tracking
Interface for tracking patient status and location to coordinate timely transportation by porters.
Automated notifications to ward staff about surgery times to manage patient fasting and preparation accurately.
Documentation and Reporting
Centralized documentation system for surgeons, junior doctors, and theater staff to enter and access surgical records and equipment usage.
Automated generation of end-of-day reports and handover notes for the night team, improving transition and preparedness.

   1. Surgeon Scheduling Module
Architecture
* Data Model: Represents surgeons and their schedules.
* Endpoints: Create and view surgeon schedules.
* Business Logic: Handles the allocation of surgery weeks and times, with functionality to update schedules.


from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hospital.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Surgeon(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    specialty = db.Column(db.String(100), nullable=False)

class Schedule(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    surgeon_id = db.Column(db.Integer, db.ForeignKey('surgeon.id'), nullable=False)
    week = db.Column(db.String(50), nullable=False)
    time_slots = db.Column(db.String(200), nullable=False)

@app.route('/surgeons', methods=['POST'])
def add_surgeon():
    data = request.get_json()
    new_surgeon = Surgeon(name=data['name'], specialty=data['specialty'])
    db.session.add(new_surgeon)
    db.session.commit()
    return jsonify({'message': 'Surgeon added successfully!'}), 201

@app.route('/schedule', methods=['POST'])
def add_schedule():
    data = request.get_json()
    new_schedule = Schedule(
        surgeon_id=data['surgeon_id'],
        week=data['week'],
        time_slots=data['time_slots']
    )
    db.session.add(new_schedule)
    db.session.commit()
    return jsonify({'message': 'Schedule added successfully!'}), 201

@app.before_first_request
def create_tables():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
  2. Theater List and Stack Module
Architecture
* Data Model: Manages theater lists, including details about surgeries, and the stack.
* Endpoints: Add surgeries to the list, and retrieve the stack.
* Business Logic: Prioritization and dynamic updating of theater lists.

class Surgery(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(100), nullable=False)
    surgeon_id = db.Column(db.Integer, db.ForeignKey('surgeon.id'), nullable=False)
    theater_id = db.Column(db.Integer)
    time = db.Column(db.DateTime, nullable=False)
    urgency = db.Column(db.String(10), nullable=False)

@app.route('/surgeries', methods=['POST'])
def add_surgery():
    data = request.get_json()
    new_surgery = Surgery(
        description=data['description'],
        surgeon_id=data['surgeon_id'],
        theater_id=data['theater_id'],
        time=datetime.strptime(data['time'], '%Y-%m-%d %H:%M:%S'),
        urgency=data['urgency']
    )
    db.session.add(new_surgery)
    db.session.commit()
    return jsonify({'message': 'Surgery added successfully!'}), 201
  3. Communication and Alerts System
Architecture
* Purpose: Manages communication between different hospital departments and alerts staff about urgent updates or changes.
* Endpoints: Send messages, receive notifications, subscribe to updates.
* Business Logic: Dynamically dispatches notifications based on events such as schedule changes, urgent new cases, or operational alerts.

from flask_socketio import SocketIO, emit

app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(300), nullable=False)
    urgency = db.Column(db.String(10), nullable=False)
    recipient_group = db.Column(db.String(50), nullable=False)

@app.route('/notify', methods=['POST'])
def send_notification():
    data = request.get_json()
    new_notification = Notification(
        message=data['message'],
        urgency=data['urgency'],
        recipient_group=data['recipient_group']
    )
    db.session.add(new_notification)
    db.session.commit()
    socketio.emit('alert', {'message': data['message'], 'urgency': data['urgency']}, room=data['recipient_group'])
    return jsonify({'message': 'Notification sent successfully!'}), 201

if __name__ == '__main__':
    socketio.run(app)
 4. Patient Management and Tracking
Architecture
* Purpose: Tracks patient location, status, and manages logistics for transporting patients within the hospital.
* Endpoints: Update patient status, track patient location, manage porter logistics.
* Business Logic: Coordinates the movement of patients to and from the surgery theaters, updates on patient prep status, and handles logistics efficiently.

class Patient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(100), nullable=False)

@app.route('/patients/<int:patient_id>', methods=['PUT'])
def update_patient_status(patient_id):
    patient = Patient.query.get_or_404(patient_id)
    data = request.get_json()
    patient.location = data.get('location', patient.location)
    patient.status = data.get('status', patient.status)
    db.session.commit()
    return jsonify({'message': 'Patient status updated successfully!'}), 200

@app.route('/patients', methods=['POST'])
def add_patient():
    data = request.get_json()
    new_patient = Patient(name=data['name'], location=data['location'], status=data['status'])
    db.session.add(new_patient)
    db.session.commit()
    return jsonify({'message': 'Patient added successfully!'}), 201


5. Documentation and Reporting
Architecture
* Purpose: Manages and archives all forms of documentation related to surgical operations and patient care.
* Endpoints: Access and submit operation reports, manage records.
* Business Logic: Ensures the accuracy and availability of critical medical documentation, generates end-of-day reports.

class SurgeryReport(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    surgery_id = db.Column(db.Integer, db.ForeignKey('surgery.id'), nullable=False)
    text = db.Column(db.Text, nullable=False)

@app.route('/reports', methods=['POST'])
def create_report():
    data = request.get_json()
    new_report = SurgeryReport(
        surgery_id=data['surgery_id'],
        text=data['text']
    )
    db.session.add(new_report)
    db.session.commit()
    return jsonify({'message': 'Report created successfully!'}), 201

@app.route('/reports/<int:report_id>', methods=['GET'])
def get_report(report_id):
    report = SurgeryReport.query.get_or_404(report_id)
    return jsonify({'surgery_id': report.surgery_id, 'text': report.text}), 200



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/ortho-connect-streamline.git
cd ortho-connect-streamline
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
