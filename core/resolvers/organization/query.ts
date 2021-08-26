import csv from 'csvtojson';

export const orgs = async () => {
    const data = await csv().fromFile('./data.csv');
    return data.map(org => {
        return {
            name: org['Organization Name'],
            type: org.Type,
            description: org.Description,
            location: org.Location,
            contact: {
                email: org['Email Address'],
                website: org.Website,
                phone: org.Phone,
                usAddress: org['US Address'],
                haitiAddress: org['Haiti Address']
            },
            socialMedia: {
                twitter: org.twitter,
                facebook: org['Facebook Page, URL'],
                whatsapp: org['WhatsApp Number']
            },
            involvement: {
                type: org['Can Help or Need Help?'].includes('can help') ? 'CAN_HELP' : 'NEEDS_HELP',
                details: org['Can Help with']
            }
        }
    })
}