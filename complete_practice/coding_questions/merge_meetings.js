const mergeMeetings = arr => {
    const mergedMeetings = [];
    arr.sort((meet1,meet2)=>(
        meet1.start-meet2.start
    ))
    console.log(arr)
    mergedMeetings.push(arr[0]);
    for(let meeting of arr.slice(1)){
        let len = mergedMeetings.length
        if(mergedMeetings[len-1].end >= meeting.start){
            mergedMeetings[len-1].end = meeting.end
        }
        else {
            mergedMeetings.push(meeting);
        }
    }
    console.log(mergedMeetings)
}

mergeMeetings([
    {
        start:0,
        end:1
    },
    {
        start:3,
        end:5
    },
    {
        start:4,
        end:8
    },
    {
        start:10,
        end:12
    },
    {
        start:9,
        end:10
    }

])