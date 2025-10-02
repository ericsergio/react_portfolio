import React, { useState } from 'react';

export default function Resume() {
    const resumeStyle = {
        height:'100%',
        width:'100%',
        backgroundColor:'rgba(159, 167, 109, 1)',
		color:'rgb(0,0,0)',
		overflow:'auto',
		padding:'2%'
    }

	
    return (
        <div style = {resumeStyle}>            
		        <table style = {{width:'100%'}}>
				<tbody>
                    <tr>
                        <td style = {{textAlign:'left'}}>                        
                        	<p>
								8209 42<sup>nd</sup>PL NE
							</p>
							<p>
								Marysville, WA 98270
							</p>
                        </td>
                        <td style = {{textAlign:'center'}}>
					        <ul style={{listStyleType:'none'}}>
						        <li style = {{fontSize:'3em'}}>Eric D. Sergio</li>							
						        <li><b>LinkedIn:</b> <a href = "https://linkedin.com/in/ericsergio">https://linkedin.com/in/ericsergio</a></li>
						        <li><b>Github:</b> <a href = "https://github.com/ericsergio">https://github.com/ericsergio</a></li>
						        <li><b>Portfolio:</b> <a href = "https://ericdsergio.webhop.me/">https://ericdsergio.webhop.me/</a></li>
					        </ul>
                        </td>
                        <td style = {{textAlign:'right'}}>
					        <p>
                            (425) 236-9680
                            </p>
					        <p>
					        ericdsergio87@icloud.com
					        </p>
                        </td>
                    </tr>
					</tbody>
                </table>	        
                <h1>Career Transition</h1>
                <p>As a career transitioning millennial with an extensive background in customer service, recent BAS in software development, 
                many years of informal learning as a hobby, and what I have learned as a parent, I believe that I possess a unique skillset that includes 
                strong customer facing attributes and the technical know-how to be a versatile asset with a proven ability to adapt, learn, and problem-solve 
                under pressure.</p>
                <h1>Education</h1>
                <table id="tbl_education1">
				<tbody>
            	    <tr>
                	    <td>
                	        <b>BAS Software Development</b>						
					    </td>
					    <td>
    					<b>Bellevue College, Bellevue, WA</b>
					    </td>
					    <td>
    					    <b>April 2021 — June 2023</b>
					    </td>
				    </tr>
				    <tr>
    				    <td>
        				    <b>Honors: </b>Magna Cum Laude
					    </td>
					    <td></td>
					    <td>
    					    <b>Cumulative GPA:</b>3.9
					    </td>
				    </tr>
				    <tr>
    				<td>
    					<ul>
        					<li>                				
                				<b>Notable coursework:</b>
                				Mobile Application Development, Web Development, Application Architecture, Unit Testing, Data Structures and Algorithms, 
								Object Oriented Programming, Database Architecture and Manipulation, Agile Framework, Advanced Data Access, Project Management, 
								Logic/Philosophy, and Ethics in Technology.                				
        					</li>
    					</ul>
    				</td>
				</tr>
				</tbody>
			</table>
            <table id="tbl_education2">
			<tbody>
    		<tr>
    			<td>
        			<b>AA Web &amp;Cloud Development</b>
				</td>
				<td>
    				<b>Edmonds College, Lynnwood, WA</b>
				</td>
				<td>
    				<b>April 2018 — March 2021</b>    				
				</td>
			</tr>
			<tr>
    			<td>
    				<b>Honors: </b>Phi Theta Kappa
				</td>
				<td>    				
				</td>
				<td>
    				<b>Cumulative GPA: </b>3.8
				</td>
			</tr>
			<tr>
    			<td>
    				<ul>
        				<li>
            				<b>Notable coursework:</b>Full Stack Web Development,JavaScript Frameworks (jQuery), Database Implementation, 
							Systems Analysis, Project Management, PHP, Joomla, SEO, Adobe Creative Suite
        				</li>
    				</ul>
				</td>
			</tr>
			</tbody>
		</table>
        <h1>Professional Experience</h1>
        <table id="tbl_experience1">
		<tbody>
    	<tr>
    		<td>
        		<b>Software Engineer Unity Game Development – Scrum Master</b>				
			</td>
			<td>
    			<b>University of Minnesota</b>
			</td>
			<td>
    			<b>January 2023 — June 2023</b>    		
			</td>
		</tr>
		<tr>
			<td>
				<ul>
    				<li>
						<b>Led UI modernization: </b>Transitioned game's UI from legacy prefabs to Unity's UI Toolkit, 
						improving user experience and development efficiency.
    				</li>
    				<li>
						<b>Pioneered UI Toolkit adoption: </b>Spearheaded, researched, and implemented UI Toolkit, 
						showcasing initiative, technical expertise, and a strong willingness to learn a new technology (UI Toolkit in Unity).
					</li>
					<li>
						<b>Designed intuitive user interface: </b>Crafted visually appealing and user-friendly UI using 
						Adobe Creative Suite, including custom assets to match existing game aesthetics using Adobe InDesign, 
						Photoshop, and Illustrator. My approved proposal provided me with the opportunity to own its integration 
						which I eagerly accepted, learned the new technology, and implemented its functionality for which the 
						entire game continues to be based on.
					</li>
					<li>
						<b>Developed core UI framework: </b>Built the initial UI codebase (C#, UXML, USS), integrating 
						it with existing game logic. I built the framework to match the approved visual design by building 
						custom UXML objects to represent each asset and the object hierarchy using object-oriented 
						programming in C#	
					</li>
				</ul>
			</td>
		</tr>
		</tbody>
	</table>
	<table className="tbl_experience2">
		<tbody>
    	<tr>
    		<td>            
            	<b>Lead Bartender and Inventory management developer</b>
			</td>
			<td>
        		<b>Outback Steakhouse</b>    			
			</td>
			<td>    			
        		<b>August 2005 — June 2023</b>    			
			</td>
		</tr>
	<tr>
		<td>
	<ul>
		<li>
			<b>Advanced from Busser to Lead Bartender: </b>Demonstrated dedication and growth within the company.					
		</li>
		<li>
			<b>Handled Managerial Duties: </b>Trusted to oversee operations and make decisions in the absence of management including 
			customer conflict resolution, the bar’s liquor, beer, and wineordering, calculating and paying co-workers participating in 
			tip pools among several other tasks carried out by management.					
		</li>
		<li>
			<b>Developed Inventory Management System: </b>for my AA required internship, I built a custom application(JavaScript, 
			jQuery, PHP, MySQL) that reduced inventory labor by 50% and eliminated unit quantity errors as well as incorrect product errors.
		</li>
		<li>
			<b>Thrived in Fast-Paced Environment: </b>Excelled under pressure while maintaining a positive and professional demeanor, 
			consistent leading seller and prioritized to work difficult shifts.
		</li>
	</ul>
	</td>
</tr>
</tbody>
</table>
<h1>Technical Skills</h1>
<table style = {{width:'100%'}}>
	<tbody>
    	<tr>
    		<td className="col-">
        		JS/jQuery
    		</td>
    		<td className="col-">
        		Git
    		</td>
    		<td className="col-">
        		Bash/AWK/SED
    		</td>
    		<td className="col-">
        		XML/UXML
    		</td>
    		<td className="col-">
        		C#/Python/PHP
    		</td>
    		<td className="col-">
        		JS Frameworks
    		</td>
    	</tr>
    	<tr>
    		<td className="col-">
        		SQL/NoSQL
    		</td>
    		<td className="col-">
        		Unity
    		</td>
    		<td className="col-">
        		Agile/Project Management
    		</td>
    		<td className="col-">
        		GCP/Azure/AWS
    		</td>
    		<td className="col-">
        		Docker
    		</td>
    		<td className="col-">
        		Hadoop/Pig
    		</td>
    	</tr>
		</tbody>
	</table>	
	<h1>Certifications</h1>
		<table style = {{width:'80%'}}>
			<tbody>
    		<tr>
    			<td style = {{textAlign:'left'}}>
					Google Data Exploration (Dec 2023)            		
				</td>
				<td style = {{textAlign:'right'}}>
					Visual Studio Essential Training: Unit Tests (Feb 2022)			
				</td>
			</tr>
			<tr>
				<td style = {{textAlign:'left'}}>
					 AI Essentials (June 2024)
				</td>
				<td style = {{textAlign:'right'}}>
					 Cloud Cybersecurity (March 2025)
    	        </td>
    		</tr>
			<tr>
				<td>
					 Traffic with TCPDump (Oct 2024)
				</td>
				<td>
    	        </td>
    		</tr>
			</tbody>
		</table>
    </div>)
}