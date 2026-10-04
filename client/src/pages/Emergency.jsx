function Emergency() {
    return (
        <main>
            <header>
                <h1>Emergency Hotline</h1>
            </header>

            <section>
                <article>
                    <h2>Find your local response contact</h2>
                    <div>
                        <label htmlFor="province">Province</label>
                        <select id="province" className="border">
                            <option value="batangas">Batangas</option>
                        </select>

                        <label htmlFor="municipality">Municipality</label>
                        <select id="municipality" className="border">
                            <option value="batangas-city">Batangas City</option>
                        </select>

                        <label htmlFor="barangay">Barangay</label>
                        <select id="barangay" className="border">
                            <option value="alangilan">Alangilan</option>
                        </select>
                    </div>
                </article>

                <article>
                    <h2>Local Response  - DRRMO Batangas City
                    </h2>
                    <p>Alangilan Batangas City</p>

                    <div>
                        <ul>
                            <li>
                                <p>Barangay Hotline</p>
                                <div>
                                    <a href="tel:(043) 349 - 8939">(043) 349 - 8939</a>
                                </div>
                            </li>
                            <li>
                                <p>CDRRMO</p>
                                <div>
                                    <a href="tel:(043) 702-3902">(043) 702-3902</a>
                                </div>
                            </li>
                            <li>
                                <p>24/7 EBD Emergency Health Hotline</p>
                                <div>
                                    <a href="tel:0999-222-6626">0999-222-6626</a>
                                </div>
                            </li>
                            <li>
                                <p>Mayor's Action Center</p>
                                <div>
                                    <a href="tel:(043) 723-1511">(043) 723-1511</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>

                <article>
                    <h2>National Hotlines</h2>
                    <div>
                        <p>Philippine National Emergency Hotline</p>
                        <p><a href="tel:911">911</a></p>
                    </div>

                    <div>
                        <div>
                            <img src="" alt="NDRRMC"/>
                            <ul>
                                <li><a href="tel:8911-5061 to 65 local 100">8911-5061 to 65 local 100</a></li>
                                <li><a href="tel:(02) 8911 - 1406">(02) 8911 - 1406</a></li>
                                <li><a href="tel:(+632) 91114016">(+632) 91114016</a></li>
                            </ul>
                        </div>

                        <div>
                            <img src="" alt="DOST"/>
                            <ul>
                                <li><a href="tel:(02) 824 - 0800">(02) 824 - 0800</a></li>
                            </ul>
                        </div>

                        <div>
                            <img src="" alt="PNP"/>
                            <ul>
                                <li><a href="tel:8911-5061 to 65 local 100">8911-5061 to 65 local 100</a></li>
                                <li><a href="tel:(02) 8911-1406">(02) 8911-1406</a></li>
                                <li><a href="tel:(+632) 91114016">(+632) 91114016</a></li>
                            </ul>
                        </div>

                        <div>
                            <img src="" alt="Red Cross"/>
                            <ul>
                                <li><a href="tel:(02) 527 - 0000">(02) 527 - 0000</a></li>
                            </ul>
                        </div>

                         <div>
                            <img src="" alt="PCG"/>
                            <ul>
                                <li><a href="tel:(02) 527 - 8481 to 89">(02) 527 - 8481 to 89</a></li>
                                <li><a href="tel:(02) 527 - 3877">(02) 527 - 3877</a></li>
                                <li><a href="tel:0917 724 3682">0917 724 3682</a></li>
                            </ul>
                        </div>

                        <div>
                            <img src="" alt="DSWD"/>
                            <ul>
                                <li><a href="tel:0917 110 5686">0917 110 5686</a></li>
                                <li><a href="tel:09199116200">09199116200</a></li>
                                <li><a href="mailto:inquiry@dswd.gov.ph">inquiry@dswd.gov.ph</a></li>
                            </ul>
                        </div>
                    </div>
                </article>

            </section>
        </main>
    )
}

export default Emergency;