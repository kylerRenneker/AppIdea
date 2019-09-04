const IdeasService = {
    getAllIdeas(db) {
        return db
            .from('ideas')
            .select('*')
    }
}

module.exports = IdeasService