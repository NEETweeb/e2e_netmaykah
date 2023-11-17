let mdUrl = "https://api.maildrop.cc/graphql"
let domain = "maildrop.cc"

export class MailDropHelper {
    getInboxQueryPayload = (username) => {
        return {
            "operationName":"GetInbox",
            "variables":{ "mailbox": username },
            "query":"query GetInbox($mailbox: String!) { ping(message: \"Test\") inbox(mailbox: $mailbox) { id subject headerfrom } altinbox(mailbox: $mailbox) }"
        }
    }

    getMessagePayload = (username, id) => {
        return {
            "query":`query Example { message(mailbox:"${username}", id:"${id}") { data } }`
        }
    }

    static async getEmailVerificationLink(username, alias, counter = 1) {
        //waits for five seconds before checking the email message
        cy.wait(5000)
        
        //recursive breaker: exits after twenty retries
        if(counter === 20) return false
    
        cy.apiRequest('POST', mdUrl, cy.getInboxQueryPayload(username)).then((res) => {
            //if email is not yet available, then recurse after five seconds
            if(res.status != 200 || cy.isNothing(res.body.data) || res.body.data.inbox.length === 0 || cy.isNothing(res.body.data.inbox[0].id)) {
                counter++
                this.getEmailVerificationLink(username, alias, counter)
                return false
            }
    
            cy.apiRequest('POST', mdUrl, cy.getMessagePayload(username, res.body.data.inbox[0].id)).then((res2) => {
                let pass = res2.body.data.message.data
                pass = pass.substring(pass.indexOf("<b>") + 3, pass.indexOf("</b>"))
                cy.wrap(pass).as(alias)
            })
        })
    }
}