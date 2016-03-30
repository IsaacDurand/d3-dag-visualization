graph3.js

// Note from Isaac: I made this to mimic the graph I drew on my desk.

loadData(
    {
        name: 'graph3',
        nodes: [
            { id: 'm6', value: { label: 'm6' } },
            { id: 'm5', value: { label: 'm5' } },
            { id: 'm4', value: { label: 'm4' } },
            { id: 'm3', value: { label: 'm3' } },
            { id: 'm2', value: { label: 'm2' } },
            { id: 'm1', value: { label: 'm1' } },
            { id: 'br1', value: { label: 'br1' } },
            { id: 'br2', value: { label: 'br2' } }
        ],
        links: [
            { u: 'm6', v: 'm5', value: { label: 'link1' } },
            { u: 'm5', v: 'm4', value: { label: 'link2' } },
            { u: 'm4', v: 'm3', value: { label: 'link3' } },
            { u: 'm3', v: 'm2', value: { label: 'link4' } },
            { u: 'm2', v: 'm1', value: { label: 'link5' } },
            { u: 'm5', v: 'br2', value: { label: 'link6' } },
            { u: 'br2', v: 'br1', value: { label: 'link7' } },
            { u: 'br1', v: 'm2', value: { label: 'link8' } }
        ]
    }
);
