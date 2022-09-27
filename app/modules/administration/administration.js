// routes
import agentRoutes from './agents/agents.routes'
import summaryRoutes from './summary/summary.routes'
import apiGatewayRoutes from './api-gateway/api-gateway.routes'

// pages
import agentPages from './agents/agents.pages'
import summaryPages from './summary/summary.pages'
import apiGatewayPages from './api-gateway/api-gateway.pages'

// not found page
import NotFound from './not-found/pages/not-found.riot'

const components = {
    routes: [
        ...agentRoutes,
        ...summaryRoutes,
        ...apiGatewayRoutes,
        {
            "hash": "not-found",
            "component": "NotFound",
            "menu": true
        },
    ],
    pages: {
        ...agentPages,
        ...summaryPages,
        ...apiGatewayPages,
        NotFound
    }
}

export default components