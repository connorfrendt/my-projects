$.ajax({
    url: 'https://us.battle.net/oauth/token',
    beforeSend: function(xhr) {
         xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
    }, success: function(data){
        alert(data);
    }
})