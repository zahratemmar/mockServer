// mockServer.js
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;
const {trips , services,serviceTypes} = require('./data.js')
app.use(express.json());
const upload = multer({ dest: 'uploads/' });

  

app.post('/participate', (req, res) => {
    if (Math.random() > 0.5) {
        return res.json({ status: -1, message: 'Failed to save participation' } );
      }
    
  const { tripData  } = req.body;
  if (tripData?.tripId && tripData?.participator && tripData?.spots) {
    const index = trips.findIndex(trip => trip.id === tripData.tripId);
    if (index != -1 && trips[index].availableSpots > tripData.spots) {
        trips[index].availableSpots -= tripData.spots;
        return res.json({ status: 1, message: 'Participation added successfully' });
    }
  }
  res.json({ status: -1, message: 'Failed to save participation' });
});



app.post('/addService', upload.single('image'), (req, res) => {
  const { service, serviceData } = JSON.parse(req.body.data);
  if (!service || !serviceData || Math.random() > 0.5) {
    return res.json({ status: -1, message: 'Failed to add service' });
  }
  if (!serviceTypes.includes(service)) {
    return res.json({ status: -1, message: 'Failed to add service' });
  }
  if (serviceData.description.text == "trip") {
    const trip = 
    {
        id:  uuidv4(),
        location: serviceData.location,
        price: serviceData.price * 100, 
        startDate: serviceData.startDate,
        endDate: serviceData.endDate,
        availableSpots: serviceData.spots,
        spots: serviceData.spots,
        houseDescription: { text: 'test', image: '/uploads/house.jpg' },
        transportDescription: { text: 'test', image: '/uploads/transport.jpg' },
        guideDescription: { text: 'test', image: '/uploads/guide.jpg' }
        }
    trips.push(trip);
    return res.json({
        status: 1,
        message: 'new trip generated',
        trip
  });
}
    const newService = 
    {
        id:  uuidv4(),
        hid: serviceData.id,
        location: serviceData.location,
        startDate: serviceData.startDate,
        endDate: serviceData.endDate,
        price: serviceData.price,
        spots: serviceData.spots,
        description: {
          text: 'test',
          image: '/uploads/1744880723126.jpg'
        },
      } 
    services.push(newService);
return res.json({ status: 2, message: 'service has been added' });
});

app.get('/services', (req, res) => {
    service = req.body.service
    location = req.body.location
  if (!service || !serviceTypes.includes(service) || Math.random() < 0.5) {
    return res.json({ status: -1, message: 'Server error' });
  }
  if (location) {
    const filteredServices = services.filter(service => service.location === location);
    return res.json(filteredServices);
  }
  res.json(services);
});


app.get('/trips', (req, res) => {
    const location = req.body.location;
  if (Math.random() > 0.5) {
    return res.json({ status: -1, message: 'Server error' });
  }
  if (location) {
    const filteredTrips = trips.filter(trip => trip.location === location);
    return res.json(filteredTrips);
  }

  res.json(trips);
});





app.post('/signup', (req, res) => {
  const { email } = req.body;
  if (email === '1111@gmail.ocm') {
    return res.json({ status: 0, message: 'Email already in use' });
  }
  if (Math.random() > 0.5) {
    return res.json({ status: -1, message: 'Server error' });
  }
  res.json({ status: 1, message: 'User created successfully', token: 'jwt token' });
});



app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  if (email === 'hello@gmail.ocm' && password === 'test') {
    return res.json({ status: 1, message: 'login successful', token: 'jwt-token' });
  }
  if (Math.random() > 0.5) {
    return res.json({ status: -1, message: 'Server error' });
  }
  res.json({ status: 0, message: 'wrong credintals' });
});





app.post('/canceltrip', (req, res) => {
  const { tripId } = req.body;
  if (Math.random() > 0.5) {
    return res.json({ status: -1, message: "couldn't cancel trip" });
  }
  if (tripId ) {
    return res.json({ status: 1, message: 'trip cancelled successfully' });
  }
  res.json({ status: -1, message: "couldn't cancel trip" });
});


app.post('/profile', (req, res) => {
    if (Math.random() < 0.5) {
      return res.json({ status: -1, message: "couldn't edit profile" });
    }
      return res.json({ status: 1, message: 'profile edited succefully successfully' });
  });
  

  app.get('/profile', (req, res) => {
    if (Math.random() < 0.5) {
      return res.json({status: -1, message: "server error" });
    }
      return res.json({ 
        status: 1, 
        profile : {
            id: 1,
            email: "sarah@example.com",
            name: "B.",
            firstName: "Sarah",
            phoneNumber: "+213123456789",
            userType: "guide",
            paymentEmail : "sarah@example.com",
            createdAt: "2024-01-01T12:00:00Z",
            updatedAt: "2025-04-18T10:30:00Z"
          }
       });
    
  });





app.listen(PORT, () => {
  console.log(`Mock server running on http://localhost:${PORT}`);
});
