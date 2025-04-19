
const trips = [
    {
      id: '2789f708-2426-46d7-9b22-ab506b58131a',
      location: 'oran',
      price: 20833.33,
      startDate: 1944624188230,
      endDate: 1994624188230,
      availableSpots: 10,
      spots: 10,
      houseDescription: {
        text: 'test',
        image: '/uploads/1744880294663.jpg'
      },
      transportDescription: {
        text: 'test',
        image: '/uploads/1744880278117.jpg'
      },
      guideDescription: {
        text: 'test',
        image: '/uploads/1744880287245.jpg'
      }
    },
    {
      id: 'b14d3f8a-1155-41a4-9e76-761f0dcee420',
      location: 'alger',
      price: 18500.0,
      startDate: 1944625000000,
      endDate: 1994625000000,
      availableSpots: 8,
      spots: 8,
      houseDescription: {
        text: 'modern villa',
        image: '/uploads/house1.jpg'
      },
      transportDescription: {
        text: 'SUV included',
        image: '/uploads/transport1.jpg'
      },
      guideDescription: {
        text: 'French/Arabic speaking',
        image: '/uploads/guide1.jpg'
      }
    },
    {
      id: 'ce93e114-bb65-42cf-b354-23d7a508a7d0',
      location: 'tlemcen',
      price: 15000.0,
      startDate: 1944629000000,
      endDate: 1994629000000,
      availableSpots: 5,
      spots: 5,
      houseDescription: {
        text: 'cozy home',
        image: '/uploads/house2.jpg'
      },
      transportDescription: {
        text: 'train pass included',
        image: '/uploads/transport2.jpg'
      },
      guideDescription: {
        text: 'historical tours',
        image: '/uploads/guide2.jpg'
      }
    },
    {
      id: '3e1f943d-739f-4c6e-a9bb-69df3f1b3e75',
      location: 'constantine',
      price: 19000.0,
      startDate: 1944633000000,
      endDate: 1994633000000,
      availableSpots: 12,
      spots: 12,
      houseDescription: {
        text: 'downtown apartment',
        image: '/uploads/house3.jpg'
      },
      transportDescription: {
        text: 'shared taxi',
        image: '/uploads/transport3.jpg'
      },
      guideDescription: {
        text: 'local expert',
        image: '/uploads/guide3.jpg'
      }
    },
    {
      id: '5a7e053b-f7a7-4d57-9c84-d5f4af84a10b',
      location: 'bejaia',
      price: 17200.0,
      startDate: 1944637000000,
      endDate: 1994637000000,
      availableSpots: 6,
      spots: 6,
      houseDescription: {
        text: 'beachside bungalow',
        image: '/uploads/house4.jpg'
      },
      transportDescription: {
        text: 'private car',
        image: '/uploads/transport4.jpg'
      },
      guideDescription: {
        text: 'eco-tourism certified',
        image: '/uploads/guide4.jpg'
      }
    },
    {
      id: 'fa29df6a-46aa-4edb-bb96-40254ea21332',
      location: 'ghardaia',
      price: 22000.0,
      startDate: 1944641000000,
      endDate: 1994641000000,
      availableSpots: 9,
      spots: 9,
      houseDescription: {
        text: 'traditional ksar',
        image: '/uploads/house5.jpg'
      },
      transportDescription: {
        text: 'desert 4x4',
        image: '/uploads/transport5.jpg'
      },
      guideDescription: {
        text: 'Touareg guide',
        image: '/uploads/guide5.jpg'
      }
    }
  ]
  

const services = [
    {
      id: 'f329f0cf-15f6-4570-aa62-fd27b5154ee2',
      hid: 'ppppppppppppppppp888',
      location: 'alger',
      startDate: 1944624188230,
      endDate: 1994624188230,
      price: 12,
      spots: 10,
      bankUrl: 'example',
      description: {
        text: 'test',
        image: '/uploads/1744880723126.jpg'
      },
      timestamp: 1744880723619
    },
    {
      id: 'a12b3c4d-11e1-4aaa-a567-ffabc123abcd',
      hid: 'hhhhhhhhhhhhhhh1234',
      location: 'oran',
      startDate: 1944625000000,
      endDate: 1994625000000,
      price: 15,
      spots: 8,
      bankUrl: 'paypal.me/oranhost',
      description: {
        text: 'Comfortable guest house in Oran',
        image: '/uploads/house_oran.jpg'
      },
      timestamp: 1744880723650
    },
    {
      id: 'b23c4d5e-22f2-5bbb-b678-ffa1b2c3d4e5',
      hid: 'host2345555333',
      location: 'tlemcen',
      startDate: 1944626000000,
      endDate: 1994626000000,
      price: 10,
      spots: 6,
      bankUrl: 'paypal.me/tlemcenstay',
      description: {
        text: 'Family run house in old Tlemcen',
        image: '/uploads/house_tlemcen.jpg'
      },
      timestamp: 1744880723680
    },
    {
      id: 'c34d5e6f-33a3-6ccc-c789-ffb2c3d4e5f6',
      hid: 'superhost56789',
      location: 'bejaia',
      startDate: 1944627000000,
      endDate: 1994627000000,
      price: 18,
      spots: 12,
      bankUrl: 'paypal.me/bejaiaresort',
      description: {
        text: 'Beachfront rental in Bejaia',
        image: '/uploads/house_bejaia.jpg'
      },
      timestamp: 1744880723711
    },
    {
      id: 'd45e6f7g-44b4-7ddd-d890-ffc3d4e5f6g7',
      hid: 'ghardaia_host_xyz',
      location: 'ghardaia',
      startDate: 1944628000000,
      endDate: 1994628000000,
      price: 20,
      spots: 9,
      bankUrl: 'paypal.me/ghardaiahome',
      description: {
        text: 'Stay in a traditional ksar',
        image: '/uploads/house_ghardaia.jpg'
      },
      timestamp: 1744880723742
    },
    {
      id: 'e56f7g8h-55c5-8eee-e901-ffd4e5f6g7h8',
      hid: 'constantine_host',
      location: 'constantine',
      startDate: 1944629000000,
      endDate: 1994629000000,
      price: 14,
      spots: 7,
      bankUrl: 'paypal.me/constantinerent',
      description: {
        text: 'Modern flat in Constantine center',
        image: '/uploads/house_constantine.jpg'
      },
      timestamp: 1744880723773
    }
  ]
  

const serviceTypes = [
    "house",
    "transport",
    "guide",
]





  module.exports = {
    trips,
    services,
    serviceTypes
  };
  