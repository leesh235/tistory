const resolvers = {
    Query:{
        posts: (_,{limit}) => console.log("success")
    }
}