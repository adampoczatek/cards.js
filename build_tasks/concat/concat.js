module.exports = {
    dist: {
        src: "<%= srcFiles %>",
        dest: "<%= buildDest %>/<%= pkg.name %>-<%= pkg.version %>.js"
    }
};