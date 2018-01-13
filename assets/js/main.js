// POST FILTER
// -------------------------

class PostToggle {

    constructor (className) {

        this.class = className
        this.isActive = true
        this.el = document.querySelector(`.PageHeader-toggleItem[data-class="${ this.class }"]`)
        this.posts = [...document.querySelectorAll(`.PostList-item[data-class="${ this.class }"]`)]

    }

    activate () {
        this.isActive = true
        this.el.classList.add('is-active')
        this.posts.forEach( post => {
            post.classList.add('is-active')
        })
    }

    deactivate () {
        this.isActive = false
        this.el.classList.remove('is-active')
        this.posts.forEach(post => {
            post.classList.remove('is-active')
        })
    }

}

const studioToggle = new PostToggle('studio')
const labToggle = new PostToggle('lab')

if (studioToggle.el) {

    studioToggle.el.addEventListener('click', () => {

        if (!studioToggle.isActive) {
            studioToggle.activate()
        } else if (labToggle.isActive) {
            labToggle.deactivate()
        } else if (studioToggle.isActive) {
            labToggle.activate()
        }

    })

    labToggle.el.addEventListener('click', () => {

        if (!labToggle.isActive) {
            labToggle.activate()
        } else if (studioToggle.isActive) {
            studioToggle.deactivate()
        } else if (labToggle.isActive) {
            studioToggle.activate()
        }

    })

}


// TIME STAMP
// -------------------------


class TimeStamp {

    constructor (startDate, endDate) {
        this.startDate = startDate
        this.endDate = endDate
        this.el = document.querySelector('.TimeStamp')
        this.options = {
            hour: 'numeric', 
            minute: 'numeric',
            second: 'numeric', 
            month: 'numeric', 
            day: 'numeric'
        }
    }

    get weekDelta () {
        return Math.ceil((Date.now() - this.startDate.getTime()) / (1000 * 3600 * 24 * 7))
    }

    get currentDate () {
        // eslint-disable-next-line no-undef
        return moment().format('MM.DD hh:mm:ss A') 
    }

    render () {
        this.el.innerHTML = `Week ${this.weekDelta}  ${ this.currentDate }`
    }

}

const timeStamp = new TimeStamp(new Date('1/21/2018'), new Date('5/15/2018'))

if (timeStamp.el) {

    timeStamp.render()

    window.setInterval( () => { 

        timeStamp.render()

    }, 1000)

}
