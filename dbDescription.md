Our Database has 5 collections. Collections are similar to Tables in relational databse system.

Hotel Schema: Used for storing hotel Names.

Room Schema: It is used for storing 
    Room Name, 
    Number,
    Hotel(Object Id referenced to Hotel colection)
    This object ID is created by mongodb in the hotel collection.

Website Schema. It Stores the Doman name and Name of the website in the collection name website.

HotelwebsiteSchema: It stores the following fields,
    Hotel(Object Id referenced to hotel collection),  
    website(Object Id referenced to website collection)
    IsVisible(Boolean value for visibility).

BookingSchema: It stores the following fields for the booking,
    hotelwebsite(Object Id referenced to hotelwebsite collection),
    room(Object Id referenced to room collection),
    price  

