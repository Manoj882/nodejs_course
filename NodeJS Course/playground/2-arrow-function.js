const eventInfo = {
    name: 'Wedding Party',
    guestList: ['Ram', 'Hari', 'Sita', 'Gita'],
    printGuestList(){
        console.log('Guest List for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
};
eventInfo.printGuestList();


