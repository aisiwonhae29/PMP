import React from "react";

export function IndexPage() {
    return (
        <div>
            <h1>Welcome to My React App</h1>
            <p>This is the home page.</p>
            <table>
                <thead>
                    <tr>
                        <th>Page</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Zest</td>
                        <td>
                            <a href="/zest" style={{ textDecoration: 'none' }}>
                                <button type="button">Go to Zest Page</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Todos</td>
                        <td>
                            <a href="/todos" style={{ textDecoration: 'none' }}>
                                <button type="button">Go to Todos Page</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Test</td>
                        <td>
                            <a href="/test" style={{ textDecoration: 'none' }}>
                                <button type="button">Go to Test Page</button>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}