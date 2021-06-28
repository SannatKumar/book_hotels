Our Database has 5 collections. Collections are similar to Tables in relational databse system.

Venue Schema: Used for storing Venue Names.

Meeting Room Schema: It is used for storing 
    Name: Name of the meeting room,
    Venue: (Object Id referenced to venue collection)
    This object ID is created by mongodb in the venue collection.

Website Schema. It Stores the Website name of the website in the collection named website.

venueWebsiteSchema: It stores the following fields,
    Venue: (Object Id referenced to venue collection),  
    website: (Object Id referenced to website collection)
    IsVisible: (Boolean value for visibility).

BookingSchema: It stores the following fields for the booking,
    venuewebsite: (Object Id referenced to venueWebsite collection),
    room: (Object Id referenced to room collection),
    price: price of each room based on website.

# How the task has been achieved?

Firstly, the venues are stored in the collection name venue. 

Secondly, meeting rooms related to respective venues are inserted into the collection meetingRoom. 
The venues id is passed from the venue collection rather than names.

Next, Website are inserted into collection name website.

In the collection venueWebsite,
venue: It is referenced with the ObjectId from venue.
website: It is referenced with ObjectId from website.

IsVisible: Boolean value is passed to link the visibility(True or False )between website and venue.

Finally,

In the collection bookingData,
venueWebsite: It is referenced with the ObjectId from venueWebsite.
room: It is referenced with the ObjectId from meetingRoom.
price: Price is given according to the rates standard for each room and website.

At last, the schema model are exported from venuedb.js and imported to venue.route.js to manipulate and view the data according to the api design.

*************************

