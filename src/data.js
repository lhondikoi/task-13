const tiers = [
    {
        'tier': 'free',
        'price': "$0/month",
        'users': 1,
        'storage': '50GB',
        'unlimited_public_projects': true,
        'community_access': true,
        'unlimited_private_projects': false,
        'dedicated_phone_support': false,
        'free_subdomain': false,
        'monthly_status_report': false,
    },
    {
        'tier': 'plus',
        'price': "$9/month",
        'users': 5,
        'storage': '50GB',
        'unlimited_public_projects': true,
        'community_access': true,
        'unlimited_private_projects': true,
        'dedicated_phone_support': true,
        'free_subdomain': true,
        'monthly_status_report': false,
    },
    {
        'tier': 'pro',
        'price': "$49/month",
        'users': 'Unlimited',
        'storage': '50GB',
        'unlimited_public_projects': true,
        'community_access': true,
        'unlimited_private_projects': true,
        'dedicated_phone_support': true,
        'free_subdomain': true,
        'monthly_status_report': true
    }
]

export default tiers;